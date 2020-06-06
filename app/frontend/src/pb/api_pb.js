// source: pb/api.proto
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

goog.exportSymbol('proto.api.GetUserByIdRequest', null, global);
goog.exportSymbol('proto.api.User', null, global);
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
proto.api.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.User.repeatedFields_, null);
};
goog.inherits(proto.api.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.User.displayName = 'proto.api.User';
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
proto.api.GetUserByIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetUserByIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetUserByIdRequest.displayName = 'proto.api.GetUserByIdRequest';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.User.repeatedFields_ = [9,15,16];



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
proto.api.User.prototype.toObject = function(opt_includeInstance) {
  return proto.api.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    city: jspb.Message.getFieldWithDefault(msg, 3, ""),
    verification: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    communityStanding: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    numReferences: jspb.Message.getFieldWithDefault(msg, 6, 0),
    gender: jspb.Message.getFieldWithDefault(msg, 7, ""),
    age: jspb.Message.getFieldWithDefault(msg, 8, 0),
    languagesList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    occupation: jspb.Message.getFieldWithDefault(msg, 10, ""),
    aboutMe: jspb.Message.getFieldWithDefault(msg, 11, ""),
    why: jspb.Message.getFieldWithDefault(msg, 12, ""),
    thing: jspb.Message.getFieldWithDefault(msg, 13, ""),
    share: jspb.Message.getFieldWithDefault(msg, 14, ""),
    countriesVisitedList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    countriesLivedList: (f = jspb.Message.getRepeatedField(msg, 16)) == null ? undefined : f
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
 * @return {!proto.api.User}
 */
proto.api.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.User;
  return proto.api.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.User}
 */
proto.api.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVerification(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCommunityStanding(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumReferences(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setGender(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAge(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addLanguages(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setOccupation(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setAboutMe(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setWhy(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setThing(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setShare(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.addCountriesVisited(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.addCountriesLived(value);
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
proto.api.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVerification();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getCommunityStanding();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getNumReferences();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getGender();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAge();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getLanguagesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getOccupation();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getAboutMe();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getWhy();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getThing();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getShare();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getCountriesVisitedList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      15,
      f
    );
  }
  f = message.getCountriesLivedList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      16,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.User.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.User} returns this
 */
proto.api.User.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.User.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.User} returns this
 */
proto.api.User.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string city = 3;
 * @return {string}
 */
proto.api.User.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.User} returns this
 */
proto.api.User.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional double verification = 4;
 * @return {number}
 */
proto.api.User.prototype.getVerification = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.User} returns this
 */
proto.api.User.prototype.setVerification = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double community_standing = 5;
 * @return {number}
 */
proto.api.User.prototype.getCommunityStanding = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.User} returns this
 */
proto.api.User.prototype.setCommunityStanding = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional int32 num_references = 6;
 * @return {number}
 */
proto.api.User.prototype.getNumReferences = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.User} returns this
 */
proto.api.User.prototype.setNumReferences = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string gender = 7;
 * @return {string}
 */
proto.api.User.prototype.getGender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.User} returns this
 */
proto.api.User.prototype.setGender = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int32 age = 8;
 * @return {number}
 */
proto.api.User.prototype.getAge = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.User} returns this
 */
proto.api.User.prototype.setAge = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * repeated string languages = 9;
 * @return {!Array<string>}
 */
proto.api.User.prototype.getLanguagesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.User} returns this
 */
proto.api.User.prototype.setLanguagesList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.User} returns this
 */
proto.api.User.prototype.addLanguages = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.User} returns this
 */
proto.api.User.prototype.clearLanguagesList = function() {
  return this.setLanguagesList([]);
};


/**
 * optional string occupation = 10;
 * @return {string}
 */
proto.api.User.prototype.getOccupation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.User} returns this
 */
proto.api.User.prototype.setOccupation = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string about_me = 11;
 * @return {string}
 */
proto.api.User.prototype.getAboutMe = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.User} returns this
 */
proto.api.User.prototype.setAboutMe = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string why = 12;
 * @return {string}
 */
proto.api.User.prototype.getWhy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.User} returns this
 */
proto.api.User.prototype.setWhy = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string thing = 13;
 * @return {string}
 */
proto.api.User.prototype.getThing = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.User} returns this
 */
proto.api.User.prototype.setThing = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string share = 14;
 * @return {string}
 */
proto.api.User.prototype.getShare = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.User} returns this
 */
proto.api.User.prototype.setShare = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * repeated string countries_visited = 15;
 * @return {!Array<string>}
 */
proto.api.User.prototype.getCountriesVisitedList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.User} returns this
 */
proto.api.User.prototype.setCountriesVisitedList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.User} returns this
 */
proto.api.User.prototype.addCountriesVisited = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.User} returns this
 */
proto.api.User.prototype.clearCountriesVisitedList = function() {
  return this.setCountriesVisitedList([]);
};


/**
 * repeated string countries_lived = 16;
 * @return {!Array<string>}
 */
proto.api.User.prototype.getCountriesLivedList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 16));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.User} returns this
 */
proto.api.User.prototype.setCountriesLivedList = function(value) {
  return jspb.Message.setField(this, 16, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.User} returns this
 */
proto.api.User.prototype.addCountriesLived = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 16, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.User} returns this
 */
proto.api.User.prototype.clearCountriesLivedList = function() {
  return this.setCountriesLivedList([]);
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
proto.api.GetUserByIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetUserByIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetUserByIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetUserByIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
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
 * @return {!proto.api.GetUserByIdRequest}
 */
proto.api.GetUserByIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetUserByIdRequest;
  return proto.api.GetUserByIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetUserByIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetUserByIdRequest}
 */
proto.api.GetUserByIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
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
proto.api.GetUserByIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetUserByIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetUserByIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetUserByIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.GetUserByIdRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetUserByIdRequest} returns this
 */
proto.api.GetUserByIdRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


goog.object.extend(exports, proto.api);
