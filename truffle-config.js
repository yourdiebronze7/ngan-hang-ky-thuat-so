// Cấu hình truffle cho mạng phát triển và biên dịch
module.exports = {
  networks: {
    // Thông tin cấu hình mạng phát triển
    development: {
      host: "127.0.0.1", // Địa chỉ máy chủ phát triển
      port: 7545, // Cổng mạng phát triển
      network_id: "*" // Bất kỳ network ID nào đều được chấp nhận
    }
  },
  compilers: {
    solc: {
      // Phiên bản trình biên dịch Solidity
      version: "^0.8.21" // Cập nhật phiên bản cho phù hợp với các tiêu chuẩn mới hơn.
    }
  }
};