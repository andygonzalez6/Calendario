const success_response = (res, code, message, data) => {
    return res.status(code).json({
      status: 'success',
      message: message,
      data: data
    });
  }

module.exports = {
    success_response
}