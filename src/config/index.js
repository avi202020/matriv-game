/**
 * This is a sample config file for JARVIG
 * Remove the .dist extension to use
 *
 * MARVEL API KEYS
 * replace the public and private keys with your own
 * You can get your api keys at: https://developer.marvel.com/account
 *
 * GOOGLE ANALYTICS TRACKING
 * replace default trackingId with your own
 *
 */

const config = {
  marvelApi: {
    publicKey: "70287897c61de4c14eebfdc8af0635ac",
    privateKey: "17e357c3c77f304555a661f4f8cb2327710c7627",
    baseUrl: `${window.location.protocol || "http:"}//gateway.marvel.com/`
  },
  google: {
    trackingId: "UA-0000000-0"
  }
};

export default config;
