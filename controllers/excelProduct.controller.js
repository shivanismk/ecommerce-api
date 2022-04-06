const { excelProduct } = require('../models/excelProduct.model')
const XLSX = require('xlsx');
const faker = require('faker');

module.exports = {

    excelImport: async (req, res) => {


        const workbook = XLSX.readFile(req.file.path);
        const sheet_namelist = workbook.SheetNames;
        var x=0;
        sheet_namelist.forEach(element => {
            const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_namelist[x]]);
            excelProduct.insertMany(xlData, (err,data) => {
                if (err) {
                    console.log(err);
                }else{
                    console.log(data);
                }
            })
            x++;
        });
        res.redirect('/');
       
    },

    excelExport: async (req, res) => {
        const wb = XLSX.utils.book_new();
        excelProduct.find((err, ) => {
            if (err) {
                console.log(err)
            } else {
                const temp = JSON.stringify();
                temp = JSON.parse(temp);
                const ws = XLSX.utils.json_to_sheet(temp);
                const down = __dirname + '/public/uploads.xlsx'
                XLSX.utils.book_append_sheet(wb, ws, "sheet1");
                XLSX.writeFile(wb, down);
                res.dawnload(down);
            }
        })

    }
}