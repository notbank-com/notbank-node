import crypto from "crypto";

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

export function getNonce(): string {
  return getRandomInt(1_000_000).toString();
}

export function sign(
  apiPublicKey: string,
  apiSecretKey: string,
  userId: number,
  nonce: string
): string {
  var message = nonce + userId + apiPublicKey;
  const hmac256 = crypto.createHmac("sha256", apiSecretKey);
  hmac256.update(message);
  return hmac256.digest("hex");
}
