exports.getAllProducts = (req,res,next) => {
    res.json(
        {
            message: 'get all product succes',
            data: [
                {
                    id: 1,
                    namaProduct: 'indomie',
                    harga: 3000
                },
                {
                    id: 1,
                    namaProduct: 'biskuat',
                    harga: 5000
                }
            ]
        }
    )
};

exports.createProduct = (req,res,next) => {
    res.json(
        {
            message: 'create product succes',
            data: {
                id: 1,
                namaProduct: 'indomie',
                harga: 3000
            }
        }
    )
}