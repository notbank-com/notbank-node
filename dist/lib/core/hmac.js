import crypto from "crypto";
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
export function getNonce() {
    return getRandomInt(1000000).toString();
}
export function sign(apiPublicKey, apiSecretKey, userId, nonce) {
    var message = nonce + userId + apiPublicKey;
    const hmac256 = crypto.createHmac("sha256", apiSecretKey);
    hmac256.update(message);
    return hmac256.digest("hex");
}
