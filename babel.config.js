module.exports = () => {
  return {
    plugins: [
      [
        'import',
        {
          libraryName: 'antd',
          style: true // or 'css'
        }
      ]
    ]
  }
}
