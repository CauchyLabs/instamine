'use strict';

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

goog.exportSymbol('proto.cauchy.CommandRequest', null, global);
goog.exportSymbol('proto.cauchy.CommandRequest.Miner', null, global);
goog.exportSymbol('proto.cauchy.CommandStatusReply', null, global);
goog.exportSymbol('proto.cauchy.Config', null, global);
goog.exportSymbol('proto.cauchy.SystemStatusReply', null, global);
goog.exportSymbol('proto.cauchy.SystemStatusReply.Miner', null, global);
goog.exportSymbol('proto.cauchy.SystemStatusRequest', null, global);

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
proto.cauchy.CommandRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cauchy.CommandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cauchy.CommandRequest.displayName = 'proto.cauchy.CommandRequest';
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
  proto.cauchy.CommandRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.cauchy.CommandRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.cauchy.CommandRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.cauchy.CommandRequest.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      miner: jspb.Message.getFieldWithDefault(msg, 1, 0),
      config: (f = msg.getConfig()) && proto.cauchy.Config.toObject(includeInstance, f)
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
 * @return {!proto.cauchy.CommandRequest}
 */
proto.cauchy.CommandRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cauchy.CommandRequest();
  return proto.cauchy.CommandRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cauchy.CommandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cauchy.CommandRequest}
 */
proto.cauchy.CommandRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.cauchy.CommandRequest.Miner} */reader.readEnum();
        msg.setMiner(value);
        break;
      case 2:
        var value = new proto.cauchy.Config();
        reader.readMessage(value, proto.cauchy.Config.deserializeBinaryFromReader);
        msg.setConfig(value);
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
proto.cauchy.CommandRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.cauchy.CommandRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cauchy.CommandRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cauchy.CommandRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getMiner();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(2, f, proto.cauchy.Config.serializeBinaryToWriter);
  }
};

/**
 * @enum {number}
 */
proto.cauchy.CommandRequest.Miner = {
  XMR_CPU: 0,
  XMR_CUDA: 1,
  XMR_AMD: 2,
  ETH: 3
};

/**
 * optional Miner miner = 1;
 * @return {!proto.cauchy.CommandRequest.Miner}
 */
proto.cauchy.CommandRequest.prototype.getMiner = function () {
  return (/** @type {!proto.cauchy.CommandRequest.Miner} */jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};

/** @param {!proto.cauchy.CommandRequest.Miner} value */
proto.cauchy.CommandRequest.prototype.setMiner = function (value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional Config config = 2;
 * @return {?proto.cauchy.Config}
 */
proto.cauchy.CommandRequest.prototype.getConfig = function () {
  return (/** @type{?proto.cauchy.Config} */jspb.Message.getWrapperField(this, proto.cauchy.Config, 2)
  );
};

/** @param {?proto.cauchy.Config|undefined} value */
proto.cauchy.CommandRequest.prototype.setConfig = function (value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.cauchy.CommandRequest.prototype.clearConfig = function () {
  this.setConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.cauchy.CommandRequest.prototype.hasConfig = function () {
  return jspb.Message.getField(this, 2) != null;
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
proto.cauchy.CommandStatusReply = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cauchy.CommandStatusReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cauchy.CommandStatusReply.displayName = 'proto.cauchy.CommandStatusReply';
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
  proto.cauchy.CommandStatusReply.prototype.toObject = function (opt_includeInstance) {
    return proto.cauchy.CommandStatusReply.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.cauchy.CommandStatusReply} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.cauchy.CommandStatusReply.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      message: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.cauchy.CommandStatusReply}
 */
proto.cauchy.CommandStatusReply.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cauchy.CommandStatusReply();
  return proto.cauchy.CommandStatusReply.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cauchy.CommandStatusReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cauchy.CommandStatusReply}
 */
proto.cauchy.CommandStatusReply.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */reader.readString();
        msg.setMessage(value);
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
proto.cauchy.CommandStatusReply.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.cauchy.CommandStatusReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cauchy.CommandStatusReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cauchy.CommandStatusReply.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string message = 1;
 * @return {string}
 */
proto.cauchy.CommandStatusReply.prototype.getMessage = function () {
  return (/** @type {string} */jspb.Message.getFieldWithDefault(this, 1, "")
  );
};

/** @param {string} value */
proto.cauchy.CommandStatusReply.prototype.setMessage = function (value) {
  jspb.Message.setField(this, 1, value);
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
proto.cauchy.Config = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cauchy.Config, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cauchy.Config.displayName = 'proto.cauchy.Config';
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
  proto.cauchy.Config.prototype.toObject = function (opt_includeInstance) {
    return proto.cauchy.Config.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.cauchy.Config} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.cauchy.Config.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      configStr: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.cauchy.Config}
 */
proto.cauchy.Config.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cauchy.Config();
  return proto.cauchy.Config.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cauchy.Config} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cauchy.Config}
 */
proto.cauchy.Config.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */reader.readString();
        msg.setConfigStr(value);
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
proto.cauchy.Config.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.cauchy.Config.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cauchy.Config} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cauchy.Config.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getConfigStr();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string config_str = 1;
 * @return {string}
 */
proto.cauchy.Config.prototype.getConfigStr = function () {
  return (/** @type {string} */jspb.Message.getFieldWithDefault(this, 1, "")
  );
};

/** @param {string} value */
proto.cauchy.Config.prototype.setConfigStr = function (value) {
  jspb.Message.setField(this, 1, value);
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
proto.cauchy.SystemStatusRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cauchy.SystemStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cauchy.SystemStatusRequest.displayName = 'proto.cauchy.SystemStatusRequest';
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
  proto.cauchy.SystemStatusRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.cauchy.SystemStatusRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.cauchy.SystemStatusRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.cauchy.SystemStatusRequest.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      id: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.cauchy.SystemStatusRequest}
 */
proto.cauchy.SystemStatusRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cauchy.SystemStatusRequest();
  return proto.cauchy.SystemStatusRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cauchy.SystemStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cauchy.SystemStatusRequest}
 */
proto.cauchy.SystemStatusRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */reader.readInt32();
        msg.setId(value);
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
proto.cauchy.SystemStatusRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.cauchy.SystemStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cauchy.SystemStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cauchy.SystemStatusRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(1, f);
  }
};

/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.cauchy.SystemStatusRequest.prototype.getId = function () {
  return (/** @type {number} */jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};

/** @param {number} value */
proto.cauchy.SystemStatusRequest.prototype.setId = function (value) {
  jspb.Message.setField(this, 1, value);
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
proto.cauchy.SystemStatusReply = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cauchy.SystemStatusReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cauchy.SystemStatusReply.displayName = 'proto.cauchy.SystemStatusReply';
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
  proto.cauchy.SystemStatusReply.prototype.toObject = function (opt_includeInstance) {
    return proto.cauchy.SystemStatusReply.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.cauchy.SystemStatusReply} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.cauchy.SystemStatusReply.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      running: jspb.Message.getFieldWithDefault(msg, 1, false),
      miner: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.cauchy.SystemStatusReply}
 */
proto.cauchy.SystemStatusReply.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cauchy.SystemStatusReply();
  return proto.cauchy.SystemStatusReply.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cauchy.SystemStatusReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cauchy.SystemStatusReply}
 */
proto.cauchy.SystemStatusReply.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {boolean} */reader.readBool();
        msg.setRunning(value);
        break;
      case 2:
        var value = /** @type {!proto.cauchy.SystemStatusReply.Miner} */reader.readEnum();
        msg.setMiner(value);
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
proto.cauchy.SystemStatusReply.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.cauchy.SystemStatusReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cauchy.SystemStatusReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cauchy.SystemStatusReply.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getRunning();
  if (f) {
    writer.writeBool(1, f);
  }
  f = message.getMiner();
  if (f !== 0.0) {
    writer.writeEnum(2, f);
  }
};

/**
 * @enum {number}
 */
proto.cauchy.SystemStatusReply.Miner = {
  XMR_CPU: 0,
  XMR_CUDA: 1,
  XMR_AMD: 2,
  ETH: 3
};

/**
 * optional bool running = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.cauchy.SystemStatusReply.prototype.getRunning = function () {
  return (/** @type {boolean} */jspb.Message.getFieldWithDefault(this, 1, false)
  );
};

/** @param {boolean} value */
proto.cauchy.SystemStatusReply.prototype.setRunning = function (value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional Miner miner = 2;
 * @return {!proto.cauchy.SystemStatusReply.Miner}
 */
proto.cauchy.SystemStatusReply.prototype.getMiner = function () {
  return (/** @type {!proto.cauchy.SystemStatusReply.Miner} */jspb.Message.getFieldWithDefault(this, 2, 0)
  );
};

/** @param {!proto.cauchy.SystemStatusReply.Miner} value */
proto.cauchy.SystemStatusReply.prototype.setMiner = function (value) {
  jspb.Message.setField(this, 2, value);
};

goog.object.extend(exports, proto.cauchy);
//# sourceMappingURL=command_pb.js.map