#include <iostream>
#include <memory>
#include <string>
#include <fstream>

#include <grpc++/grpc++.h>
#include <grpc++/security/server_credentials.h>
#include <grpc++/server.h>
#include <grpc++/server_builder.h>
#include <grpc++/server_context.h>

#include <boost/optional.hpp>
#include <boost/process.hpp>
#include <boost/system/system_error.hpp>

#include "process_manager.h"
#include "shared.h"
#include "helper.h"

#include "miner.grpc.pb.h"
#include "miner.pb.h"
#include "messages.pb.h"

using grpc::Server;
using grpc::ServerWriter;
using grpc::ServerBuilder;
using grpc::ServerContext;
using grpc::Status;

using namespace cauchy;

using std::cout;
using std::endl; 

void write(const std::string &filename, const std::string &content)
{
  std::ofstream out(filename);
  out << content;
  out.close();
}

class MinerStatusServiceImpl final : public MinerStatus::Service
{
public:
  process_manager process;
  SharedProtobufMessageQueue<Event> status_channel;
  bool terminate = false;
  std::string exec;

  MinerStatusServiceImpl(std::string exec) : MinerStatus::Service(), exec(exec)
  {}

  // Is the managed miner process running?
  bool miner_running()
  {
    return process.started();
  }

  Status ReportStatus(ServerContext *context, const StatusRequest *request,
                      Event *event) override
  {

    if (process.running())
    {
      std::cout << "got something on the server side" << std::endl;
     
      // need a check here
      *event = status_channel.pop();
    }
    else
    {
      auto e = event->mutable_empty();
    }

    auto status = event->mutable_status();
    status->set_running(miner_running());

    return Status::OK;
  }

  Status SystemStatus(ServerContext *context, const SystemStatusRequest *request,
                      SystemStatusReply *reply) override
  {

    reply->set_running(miner_running());

    return Status::OK;
  }

  Status StartMiner(ServerContext *context, const CommandRequest *request,
                    CommandStatusReply *reply) override
  {

    // SharedProtobuf should be part of process!
    std::string message;

    auto config = request->config().config_str();

    cout << "trying to start server!" << endl;
    if (!process.started())
    {

      write("config.txt", config);

      terminate = false;
      process.open_process(exec);

      message = "Server started";
      cout << "starting the server" << endl;
    }
    else
    {
      message = "Server is running.";
      cout << "server is already running" << endl;
    }

    reply->set_message(message);
    return Status::OK;
  }

  Status StopMiner(ServerContext *context, const CommandRequest *request,
                   CommandStatusReply *reply) override
  {

    std::string message;
    if (process.started())
    {
      terminate = true;
      process.terminate();
      message = "server stopped";
      cout << "stopping server." << endl;
    }
    else
    {
      message = "server not running";
      cout << "server is not running" << endl;
    }

    reply->set_message(message);
    return Status::OK;
  }
};

void RunServer(std::string exec, std::string address = "0.0.0.0:50051")
{
  std::string server_address(address);
  MinerStatusServiceImpl service(exec);

  ServerBuilder builder;

  // Listen on the given address without any authentication mechanism.
  builder.AddListeningPort(server_address, grpc::InsecureServerCredentials());

  // Register "service" as the instance through which we'll communicate with
  // clients. In this case it corresponds to an *synchronous* service.
  builder.RegisterService(&service);

  // Finally assemble the server.
  std::unique_ptr<Server> server(builder.BuildAndStart());
  std::cout << "Server listening on " << server_address << std::endl;

  // Wait for the server to shutdown. Note that some other thread must be
  // responsible for shutting down the server for this call to ever return.
  server->Wait();
}

int main(int argc, char **argv)
{

  if (argc < 2)
  {
    return 1;
  }

  std::string exec = argv[1];

  // exec = "c:\\users\\k\\desktop\\projects\\asuka\\_builds\\release\\t.exe";
  RunServer(exec);
  return 0;
}