module.exports = {
    //toda vez que for exibir um erro eu vou por este bloco 
    //E criamos essa função e colocamos os respectivos parametros
    send: (err, req, res, code = 400) => {
        console.log(`error ${err}`);
                    res.status(code).json({
                        error:err
                    });
    }
};