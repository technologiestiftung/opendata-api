'use strict';

module.exports.topics = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify([
      {
        id: "myId",
        name: "myName"
      }
    ])
  };
};

module.exports.licenses = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify([
      {
        id: "myId",
        name: "myName"
      }
    ])
  };
};
