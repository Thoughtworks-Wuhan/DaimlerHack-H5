var request = require("sync-request");
var url = require("url");
var crypto = require("crypto");

// 这里填写AK和请求
const md5 = function(buffer) {
  var hash;
  hash = crypto.createHash("md5");
  hash.update(buffer);
  return hash.digest("base64");
};

const sha1 = function(stringToSign, secret) {
  var signature;
  return (signature = crypto
    .createHmac("sha1", secret)
    .update(stringToSign)
    .digest()
    .toString("base64"));
};

module.exports = (body) => {
  var date = new Date().toUTCString();
  // 这里填写AK和请求
  var ak_id = "LTAIVNsDfkqFBhG9";
  var ak_secret = "oYK90eEKXbWzq4TxZgWsJ8kPgGakUQ";
  var options = {
    url:
      "https://dtplus-cn-shanghai.data.aliyuncs.com/dt_ng_1747801636299161/pai/prediction/projects/daimler_hack/onlinemodels/xlab_m_linearregressio_684991_v2",
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      date: date,
      Authorization: ""
    }
  };

  // step1: 组stringToSign [StringToSign = #{method}\\n#{accept}\\n#{data}\\n#{contentType}\\n#{date}\\n#{action}]
  var body = options.body || "";
  var bodymd5;
  if (body === void 0 || body === "") {
    bodymd5 = body;
  } else {
    bodymd5 = md5(new Buffer(body));
  }
  console.log(bodymd5);
  var stringToSign =
    options.method +
    "\n" +
    options.headers.accept +
    "\n" +
    bodymd5 +
    "\n" +
    options.headers["content-type"] +
    "\n" +
    options.headers.date +
    "\n" +
    url.parse(options.url).path;
  console.log("step1-Sign string:", stringToSign);
  // step2: 加密 [Signature = Base64( HMAC-SHA1( AccessSecret, UTF-8-Encoding-Of(StringToSign) ) )]
  var signature = sha1(stringToSign, ak_secret);
  // console.log("step2-signature:", signature);
  // step3: 组authorization header [Authorization =  Dataplus AccessKeyId + ":" + Signature]
  var authHeader = "Dataplus " + ak_id + ":" + signature;
  console.log("step3-authorization Header:", authHeader);
  options.headers.Authorization = authHeader;
  console.log("authHeader", authHeader);
  // step4: send request
  var res = request('POST', 'https://dtplus-cn-shanghai.data.aliyuncs.com/dt_ng_1747801636299161/pai/prediction/projects/daimler_hack/onlinemodels/xlab_m_linearregressio_684991_v1',options);
  return JSON.parse(res.getBody('utf8'));
};
