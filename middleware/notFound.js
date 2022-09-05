const notFound = (req, res) => {
    res.status(404).json("Paage not found")

}


module.exports = notFound;