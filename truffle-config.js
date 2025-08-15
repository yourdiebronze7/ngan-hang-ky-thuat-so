// Cấu hình truffle cho mạng phát triển và biên dịch
module.exports = {
  networks: {
    // Thông tin cấu hình mạng phát triển
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    }
  },
  compilers: {
    solc: {
      // Phiên bản trình biên dịch solidity
      version: "^0.8.0"
    }
  }
};