// source: koinos/broadcast/broadcast.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var koinos_common_pb = require('../../koinos/common_pb.js');
goog.object.extend(proto, koinos_common_pb);
var koinos_options_pb = require('../../koinos/options_pb.js');
goog.object.extend(proto, koinos_options_pb);
var koinos_protocol_protocol_pb = require('../../koinos/protocol/protocol_pb.js');
goog.object.extend(proto, koinos_protocol_protocol_pb);
goog.exportSymbol('proto.koinos.broadcast.block_accepted', null, global);
goog.exportSymbol('proto.koinos.broadcast.block_irreversible', null, global);
goog.exportSymbol('proto.koinos.broadcast.fork_heads', null, global);
goog.exportSymbol('proto.koinos.broadcast.transaction_accepted', null, global);
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
proto.koinos.broadcast.transaction_accepted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.broadcast.transaction_accepted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.broadcast.transaction_accepted.displayName = 'proto.koinos.broadcast.transaction_accepted';
}
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
proto.koinos.broadcast.block_accepted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.broadcast.block_accepted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.broadcast.block_accepted.displayName = 'proto.koinos.broadcast.block_accepted';
}
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
proto.koinos.broadcast.block_irreversible = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.broadcast.block_irreversible, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.broadcast.block_irreversible.displayName = 'proto.koinos.broadcast.block_irreversible';
}
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
proto.koinos.broadcast.fork_heads = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.koinos.broadcast.fork_heads.repeatedFields_, null);
};
goog.inherits(proto.koinos.broadcast.fork_heads, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.broadcast.fork_heads.displayName = 'proto.koinos.broadcast.fork_heads';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.broadcast.transaction_accepted.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.broadcast.transaction_accepted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.broadcast.transaction_accepted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.broadcast.transaction_accepted.toObject = function(includeInstance, msg) {
  var f, obj = {
    transaction: (f = msg.getTransaction()) && koinos_protocol_protocol_pb.transaction.toObject(includeInstance, f),
    payer: msg.getPayer_asB64(),
    maxPayerRc: jspb.Message.getFieldWithDefault(msg, 3, "0"),
    rcLimit: jspb.Message.getFieldWithDefault(msg, 4, "0"),
    height: jspb.Message.getFieldWithDefault(msg, 5, "0"),
    diskStorageUsed: jspb.Message.getFieldWithDefault(msg, 6, "0"),
    networkBandwidthUsed: jspb.Message.getFieldWithDefault(msg, 7, "0"),
    computeBandwidthUsed: jspb.Message.getFieldWithDefault(msg, 8, "0")
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
 * @return {!proto.koinos.broadcast.transaction_accepted}
 */
proto.koinos.broadcast.transaction_accepted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.broadcast.transaction_accepted;
  return proto.koinos.broadcast.transaction_accepted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.broadcast.transaction_accepted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.broadcast.transaction_accepted}
 */
proto.koinos.broadcast.transaction_accepted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new koinos_protocol_protocol_pb.transaction;
      reader.readMessage(value,koinos_protocol_protocol_pb.transaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayer(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setMaxPayerRc(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setRcLimit(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setHeight(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setDiskStorageUsed(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setNetworkBandwidthUsed(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setComputeBandwidthUsed(value);
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
proto.koinos.broadcast.transaction_accepted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.broadcast.transaction_accepted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.broadcast.transaction_accepted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.broadcast.transaction_accepted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      koinos_protocol_protocol_pb.transaction.serializeBinaryToWriter
    );
  }
  f = message.getPayer_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getMaxPayerRc();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      3,
      f
    );
  }
  f = message.getRcLimit();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      4,
      f
    );
  }
  f = message.getHeight();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      5,
      f
    );
  }
  f = message.getDiskStorageUsed();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      6,
      f
    );
  }
  f = message.getNetworkBandwidthUsed();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      7,
      f
    );
  }
  f = message.getComputeBandwidthUsed();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      8,
      f
    );
  }
};


/**
 * optional koinos.protocol.transaction transaction = 1;
 * @return {?proto.koinos.protocol.transaction}
 */
proto.koinos.broadcast.transaction_accepted.prototype.getTransaction = function() {
  return /** @type{?proto.koinos.protocol.transaction} */ (
    jspb.Message.getWrapperField(this, koinos_protocol_protocol_pb.transaction, 1));
};


/**
 * @param {?proto.koinos.protocol.transaction|undefined} value
 * @return {!proto.koinos.broadcast.transaction_accepted} returns this
*/
proto.koinos.broadcast.transaction_accepted.prototype.setTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.broadcast.transaction_accepted} returns this
 */
proto.koinos.broadcast.transaction_accepted.prototype.clearTransaction = function() {
  return this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.broadcast.transaction_accepted.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes payer = 2;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.broadcast.transaction_accepted.prototype.getPayer = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes payer = 2;
 * This is a type-conversion wrapper around `getPayer()`
 * @return {string}
 */
proto.koinos.broadcast.transaction_accepted.prototype.getPayer_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayer()));
};


/**
 * optional bytes payer = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayer()`
 * @return {!Uint8Array}
 */
proto.koinos.broadcast.transaction_accepted.prototype.getPayer_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayer()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.broadcast.transaction_accepted} returns this
 */
proto.koinos.broadcast.transaction_accepted.prototype.setPayer = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional uint64 max_payer_rc = 3;
 * @return {string}
 */
proto.koinos.broadcast.transaction_accepted.prototype.getMaxPayerRc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.koinos.broadcast.transaction_accepted} returns this
 */
proto.koinos.broadcast.transaction_accepted.prototype.setMaxPayerRc = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional uint64 rc_limit = 4;
 * @return {string}
 */
proto.koinos.broadcast.transaction_accepted.prototype.getRcLimit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.koinos.broadcast.transaction_accepted} returns this
 */
proto.koinos.broadcast.transaction_accepted.prototype.setRcLimit = function(value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};


/**
 * optional uint64 height = 5;
 * @return {string}
 */
proto.koinos.broadcast.transaction_accepted.prototype.getHeight = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, "0"));
};


/**
 * @param {string} value
 * @return {!proto.koinos.broadcast.transaction_accepted} returns this
 */
proto.koinos.broadcast.transaction_accepted.prototype.setHeight = function(value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};


/**
 * optional uint64 disk_storage_used = 6;
 * @return {string}
 */
proto.koinos.broadcast.transaction_accepted.prototype.getDiskStorageUsed = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, "0"));
};


/**
 * @param {string} value
 * @return {!proto.koinos.broadcast.transaction_accepted} returns this
 */
proto.koinos.broadcast.transaction_accepted.prototype.setDiskStorageUsed = function(value) {
  return jspb.Message.setProto3StringIntField(this, 6, value);
};


/**
 * optional uint64 network_bandwidth_used = 7;
 * @return {string}
 */
proto.koinos.broadcast.transaction_accepted.prototype.getNetworkBandwidthUsed = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, "0"));
};


/**
 * @param {string} value
 * @return {!proto.koinos.broadcast.transaction_accepted} returns this
 */
proto.koinos.broadcast.transaction_accepted.prototype.setNetworkBandwidthUsed = function(value) {
  return jspb.Message.setProto3StringIntField(this, 7, value);
};


/**
 * optional uint64 compute_bandwidth_used = 8;
 * @return {string}
 */
proto.koinos.broadcast.transaction_accepted.prototype.getComputeBandwidthUsed = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, "0"));
};


/**
 * @param {string} value
 * @return {!proto.koinos.broadcast.transaction_accepted} returns this
 */
proto.koinos.broadcast.transaction_accepted.prototype.setComputeBandwidthUsed = function(value) {
  return jspb.Message.setProto3StringIntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.broadcast.block_accepted.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.broadcast.block_accepted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.broadcast.block_accepted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.broadcast.block_accepted.toObject = function(includeInstance, msg) {
  var f, obj = {
    block: (f = msg.getBlock()) && koinos_protocol_protocol_pb.block.toObject(includeInstance, f)
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
 * @return {!proto.koinos.broadcast.block_accepted}
 */
proto.koinos.broadcast.block_accepted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.broadcast.block_accepted;
  return proto.koinos.broadcast.block_accepted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.broadcast.block_accepted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.broadcast.block_accepted}
 */
proto.koinos.broadcast.block_accepted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new koinos_protocol_protocol_pb.block;
      reader.readMessage(value,koinos_protocol_protocol_pb.block.deserializeBinaryFromReader);
      msg.setBlock(value);
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
proto.koinos.broadcast.block_accepted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.broadcast.block_accepted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.broadcast.block_accepted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.broadcast.block_accepted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      koinos_protocol_protocol_pb.block.serializeBinaryToWriter
    );
  }
};


/**
 * optional koinos.protocol.block block = 1;
 * @return {?proto.koinos.protocol.block}
 */
proto.koinos.broadcast.block_accepted.prototype.getBlock = function() {
  return /** @type{?proto.koinos.protocol.block} */ (
    jspb.Message.getWrapperField(this, koinos_protocol_protocol_pb.block, 1));
};


/**
 * @param {?proto.koinos.protocol.block|undefined} value
 * @return {!proto.koinos.broadcast.block_accepted} returns this
*/
proto.koinos.broadcast.block_accepted.prototype.setBlock = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.broadcast.block_accepted} returns this
 */
proto.koinos.broadcast.block_accepted.prototype.clearBlock = function() {
  return this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.broadcast.block_accepted.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.broadcast.block_irreversible.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.broadcast.block_irreversible.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.broadcast.block_irreversible} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.broadcast.block_irreversible.toObject = function(includeInstance, msg) {
  var f, obj = {
    topology: (f = msg.getTopology()) && koinos_common_pb.block_topology.toObject(includeInstance, f)
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
 * @return {!proto.koinos.broadcast.block_irreversible}
 */
proto.koinos.broadcast.block_irreversible.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.broadcast.block_irreversible;
  return proto.koinos.broadcast.block_irreversible.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.broadcast.block_irreversible} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.broadcast.block_irreversible}
 */
proto.koinos.broadcast.block_irreversible.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new koinos_common_pb.block_topology;
      reader.readMessage(value,koinos_common_pb.block_topology.deserializeBinaryFromReader);
      msg.setTopology(value);
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
proto.koinos.broadcast.block_irreversible.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.broadcast.block_irreversible.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.broadcast.block_irreversible} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.broadcast.block_irreversible.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopology();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      koinos_common_pb.block_topology.serializeBinaryToWriter
    );
  }
};


/**
 * optional koinos.block_topology topology = 1;
 * @return {?proto.koinos.block_topology}
 */
proto.koinos.broadcast.block_irreversible.prototype.getTopology = function() {
  return /** @type{?proto.koinos.block_topology} */ (
    jspb.Message.getWrapperField(this, koinos_common_pb.block_topology, 1));
};


/**
 * @param {?proto.koinos.block_topology|undefined} value
 * @return {!proto.koinos.broadcast.block_irreversible} returns this
*/
proto.koinos.broadcast.block_irreversible.prototype.setTopology = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.broadcast.block_irreversible} returns this
 */
proto.koinos.broadcast.block_irreversible.prototype.clearTopology = function() {
  return this.setTopology(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.broadcast.block_irreversible.prototype.hasTopology = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.koinos.broadcast.fork_heads.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.broadcast.fork_heads.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.broadcast.fork_heads.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.broadcast.fork_heads} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.broadcast.fork_heads.toObject = function(includeInstance, msg) {
  var f, obj = {
    lastIrreversibleBlock: (f = msg.getLastIrreversibleBlock()) && koinos_common_pb.block_topology.toObject(includeInstance, f),
    headsList: jspb.Message.toObjectList(msg.getHeadsList(),
    koinos_common_pb.block_topology.toObject, includeInstance)
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
 * @return {!proto.koinos.broadcast.fork_heads}
 */
proto.koinos.broadcast.fork_heads.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.broadcast.fork_heads;
  return proto.koinos.broadcast.fork_heads.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.broadcast.fork_heads} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.broadcast.fork_heads}
 */
proto.koinos.broadcast.fork_heads.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new koinos_common_pb.block_topology;
      reader.readMessage(value,koinos_common_pb.block_topology.deserializeBinaryFromReader);
      msg.setLastIrreversibleBlock(value);
      break;
    case 2:
      var value = new koinos_common_pb.block_topology;
      reader.readMessage(value,koinos_common_pb.block_topology.deserializeBinaryFromReader);
      msg.addHeads(value);
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
proto.koinos.broadcast.fork_heads.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.broadcast.fork_heads.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.broadcast.fork_heads} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.broadcast.fork_heads.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLastIrreversibleBlock();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      koinos_common_pb.block_topology.serializeBinaryToWriter
    );
  }
  f = message.getHeadsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      koinos_common_pb.block_topology.serializeBinaryToWriter
    );
  }
};


/**
 * optional koinos.block_topology last_irreversible_block = 1;
 * @return {?proto.koinos.block_topology}
 */
proto.koinos.broadcast.fork_heads.prototype.getLastIrreversibleBlock = function() {
  return /** @type{?proto.koinos.block_topology} */ (
    jspb.Message.getWrapperField(this, koinos_common_pb.block_topology, 1));
};


/**
 * @param {?proto.koinos.block_topology|undefined} value
 * @return {!proto.koinos.broadcast.fork_heads} returns this
*/
proto.koinos.broadcast.fork_heads.prototype.setLastIrreversibleBlock = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.broadcast.fork_heads} returns this
 */
proto.koinos.broadcast.fork_heads.prototype.clearLastIrreversibleBlock = function() {
  return this.setLastIrreversibleBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.broadcast.fork_heads.prototype.hasLastIrreversibleBlock = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated koinos.block_topology heads = 2;
 * @return {!Array<!proto.koinos.block_topology>}
 */
proto.koinos.broadcast.fork_heads.prototype.getHeadsList = function() {
  return /** @type{!Array<!proto.koinos.block_topology>} */ (
    jspb.Message.getRepeatedWrapperField(this, koinos_common_pb.block_topology, 2));
};


/**
 * @param {!Array<!proto.koinos.block_topology>} value
 * @return {!proto.koinos.broadcast.fork_heads} returns this
*/
proto.koinos.broadcast.fork_heads.prototype.setHeadsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.koinos.block_topology=} opt_value
 * @param {number=} opt_index
 * @return {!proto.koinos.block_topology}
 */
proto.koinos.broadcast.fork_heads.prototype.addHeads = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.koinos.block_topology, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.koinos.broadcast.fork_heads} returns this
 */
proto.koinos.broadcast.fork_heads.prototype.clearHeadsList = function() {
  return this.setHeadsList([]);
};


goog.object.extend(exports, proto.koinos.broadcast);
