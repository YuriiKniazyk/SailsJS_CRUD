/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    list: async (req, res) => {

        await User.find({}).exec((err, data) => {

            if (err) { res.status(400).json('Error DataBase')};
      
            res.view('pages/list', {data: data} );
        });
    },

    create: async (req, res) => {

        const {name} = req.body;
        const {surname} = req.body;

        await User.create({name: name, surname: surname}).exec((err) => {

            if (err) { res.status(400).json('Error DataBase')};
      
            res.redirect('/users/list');
        });
    },

    delete: async (req, res) => {

        await User.destroy({id: req.params.id}).exec((err) => {

            if (err) { res.status(400).json('Error DataBase')};
      
            res.redirect('/users/list');
        });

        return false;
    },
    
    edit: async (req, res) => {

        await User.findOne({id: req.params.id}).exec((err, user) => {

            if (err) { res.status(400).json('Error DataBase')};
      
            res.view('pages/edit', {user: user});
        });
    },

    update: async (req, res) => {

        const {name} = req.body;
        const {surname} = req.body;

        await User.update({id: req.params.id},{name: name, surname: surname}).exec((err) => {

            if (err) { res.status(400).json('Error DataBase')};
      
            res.redirect('/users/list');
        });

        return false;
    },

    find: async (req, res) => {

        const {name} = req.query;    

        await User.find({name: new RegExp(name, 'i')}).exec(function(err, users) {

            if (err) { res.status(400).json('Error DataBase') };
            
            if (!users) {
                users = ['Users not found!'];
                res.view('pages/find', {users: users} );

            } else {

                res.view('pages/find', {users: users} );
            }
        });     
    }
};

