/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.cauchy.Hashrate', null, global);
goog.exportSymbol('proto.cauchy.ResultReport', null, global);
goog.exportSymbol('proto.cauchy.Statistics', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cauchy.Statistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cauchy.Statistics.repeatedFields_, null);
};
goog.inherits(proto.cauchy.Statistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cauchy.Statistics.displayName = 'proto.cauchy.Statistics';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cauchy.Statistics.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cauchy.Statistics.prototype.toObject = function(opt_includeInstance) {
  return proto.cauchy.Statistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cauchy.Statistics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cauchy.Statistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    poolAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    connectionEst: jspb.Message.getFieldWithDefault(msg, 2, ""),
    errorLog: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ping: jspb.Message.getFieldWithDefault(msg, 4, 0),
    nThreads: jspb.Message.getFieldWithDefault(msg, 5, 0),
    hashrateList: jspb.Message.toObjectList(msg.getHashrateList(),
    proto.cauchy.Hashrate.toObject, includeInstance),
    connected: jspb.Message.getFieldWithDefault(msg, 7, false),
    running: jspb.Message.getFieldWithDefault(msg, 8, false),
    loggedIn: jspb.Message.getFieldWithDefault(msg, 9, false),
    report: (f = msg.getReport()) && proto.cauchy.ResultReport.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cauchy.Statistics}
 */
proto.cauchy.Statistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cauchy.Statistics;
  return proto.cauchy.Statistics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cauchy.Statistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cauchy.Statistics}
 */
proto.cauchy.Statistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPoolAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionEst(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorLog(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPing(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNThreads(value);
      break;
    case 6:
      var value = new proto.cauchy.Hashrate;
      reader.readMessage(value,proto.cauchy.Hashrate.deserializeBinaryFromReader);
      msg.addHashrate(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConnected(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRunning(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLoggedIn(value);
      break;
    case 10:
      var value = new proto.cauchy.ResultReport;
      reader.readMessage(value,proto.cauchy.ResultReport.deserializeBinaryFromReader);
      msg.setReport(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cauchy.Statistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cauchy.Statistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cauchy.Statistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cauchy.Statistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPoolAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConnectionEst();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getErrorLog();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPing();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getNThreads();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getHashrateList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.cauchy.Hashrate.serializeBinaryToWriter
    );
  }
  f = message.getConnected();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getRunning();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getLoggedIn();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.cauchy.ResultReport.serializeBinaryToWriter
    );
  }
};


/**
 * optional string pool_address = 1;
 * @return {string}
 */
proto.cauchy.Statistics.prototype.getPoolAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.cauchy.Statistics.prototype.setPoolAddress = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string connection_est = 2;
 * @return {string}
 */
proto.cauchy.Statistics.prototype.getConnectionEst = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.cauchy.Statistics.prototype.setConnectionEst = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string error_log = 3;
 * @return {string}
 */
proto.cauchy.Statistics.prototype.getErrorLog = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.cauchy.Statistics.prototype.setErrorLog = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 ping = 4;
 * @return {number}
 */
proto.cauchy.Statistics.prototype.getPing = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.cauchy.Statistics.prototype.setPing = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 n_threads = 5;
 * @return {number}
 */
proto.cauchy.Statistics.prototype.getNThreads = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.cauchy.Statistics.prototype.setNThreads = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * repeated Hashrate hashrate = 6;
 * @return {!Array.<!proto.cauchy.Hashrate>}
 */
proto.cauchy.Statistics.prototype.getHashrateList = function() {
  return /** @type{!Array.<!proto.cauchy.Hashrate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cauchy.Hashrate, 6));
};


/** @param {!Array.<!proto.cauchy.Hashrate>} value */
proto.cauchy.Statistics.prototype.setHashrateList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.cauchy.Hashrate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cauchy.Hashrate}
 */
proto.cauchy.Statistics.prototype.addHashrate = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.cauchy.Hashrate, opt_index);
};


proto.cauchy.Statistics.prototype.clearHashrateList = function() {
  this.setHashrateList([]);
};


/**
 * optional bool connected = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.cauchy.Statistics.prototype.getConnected = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.cauchy.Statistics.prototype.setConnected = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional bool running = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.cauchy.Statistics.prototype.getRunning = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.cauchy.Statistics.prototype.setRunning = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional bool logged_in = 9;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.cauchy.Statistics.prototype.getLoggedIn = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 9, false));
};


/** @param {boolean} value */
proto.cauchy.Statistics.prototype.setLoggedIn = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * optional ResultReport report = 10;
 * @return {?proto.cauchy.ResultReport}
 */
proto.cauchy.Statistics.prototype.getReport = function() {
  return /** @type{?proto.cauchy.ResultReport} */ (
    jspb.Message.getWrapperField(this, proto.cauchy.ResultReport, 10));
};


/** @param {?proto.cauchy.ResultReport|undefined} value */
proto.cauchy.Statistics.prototype.setReport = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.cauchy.Statistics.prototype.clearReport = function() {
  this.setReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.cauchy.Statistics.prototype.hasReport = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cauchy.ResultReport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cauchy.ResultReport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cauchy.ResultReport.displayName = 'proto.cauchy.ResultReport';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cauchy.ResultReport.prototype.toObject = function(opt_includeInstance) {
  return proto.cauchy.ResultReport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cauchy.ResultReport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cauchy.ResultReport.toObject = function(includeInstance, msg) {
  var f, obj = {
    diff: jspb.Message.getFieldWithDefault(msg, 1, 0),
    goodResults: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalResults: jspb.Message.getFieldWithDefault(msg, 3, 0),
    averageResultTime: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    ratio: +jspb.Message.getFieldWithDefault(msg, 5, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cauchy.ResultReport}
 */
proto.cauchy.ResultReport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cauchy.ResultReport;
  return proto.cauchy.ResultReport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cauchy.ResultReport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cauchy.ResultReport}
 */
proto.cauchy.ResultReport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDiff(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGoodResults(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalResults(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAverageResultTime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRatio(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cauchy.ResultReport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cauchy.ResultReport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cauchy.ResultReport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cauchy.ResultReport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDiff();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getGoodResults();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTotalResults();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getAverageResultTime();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getRatio();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional uint64 diff = 1;
 * @return {number}
 */
proto.cauchy.ResultReport.prototype.getDiff = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.cauchy.ResultReport.prototype.setDiff = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint64 good_results = 2;
 * @return {number}
 */
proto.cauchy.ResultReport.prototype.getGoodResults = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.cauchy.ResultReport.prototype.setGoodResults = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint64 total_results = 3;
 * @return {number}
 */
proto.cauchy.ResultReport.prototype.getTotalResults = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.cauchy.ResultReport.prototype.setTotalResults = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional double average_result_time = 4;
 * @return {number}
 */
proto.cauchy.ResultReport.prototype.getAverageResultTime = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.cauchy.ResultReport.prototype.setAverageResultTime = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional double ratio = 5;
 * @return {number}
 */
proto.cauchy.ResultReport.prototype.getRatio = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.cauchy.ResultReport.prototype.setRatio = function(value) {
  jspb.Message.setField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cauchy.Hashrate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cauchy.Hashrate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cauchy.Hashrate.displayName = 'proto.cauchy.Hashrate';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cauchy.Hashrate.prototype.toObject = function(opt_includeInstance) {
  return proto.cauchy.Hashrate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cauchy.Hashrate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cauchy.Hashrate.toObject = function(includeInstance, msg) {
  var f, obj = {
    hashrate: +jspb.Message.getFieldWithDefault(msg, 1, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cauchy.Hashrate}
 */
proto.cauchy.Hashrate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cauchy.Hashrate;
  return proto.cauchy.Hashrate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cauchy.Hashrate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cauchy.Hashrate}
 */
proto.cauchy.Hashrate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHashrate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cauchy.Hashrate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cauchy.Hashrate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cauchy.Hashrate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cauchy.Hashrate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHashrate();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double hashrate = 1;
 * @return {number}
 */
proto.cauchy.Hashrate.prototype.getHashrate = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.cauchy.Hashrate.prototype.setHashrate = function(value) {
  jspb.Message.setField(this, 1, value);
};


goog.object.extend(exports, proto.cauchy);
