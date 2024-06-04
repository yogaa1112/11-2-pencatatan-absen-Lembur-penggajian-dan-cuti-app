module.exports = {
    homePage: (req, res) => {
        res.send('Hello, World!');
      },

    getMessage: (req, res) => {
        res.json({ message: "Hello, World!" })
      }
}