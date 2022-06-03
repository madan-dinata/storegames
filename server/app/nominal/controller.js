import Nominal from './model.js';

export const index = async (req, res) => {
  try {
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');

    const alert = { message: alertMessage, status: alertStatus };
    const nominal = await Nominal.find();

    res.render('admin/nominal/view_nominal', { title: 'Nominal', nominal, alert });
  } catch (error) {
    req.flash('alertMessage', `${error.mesasge}`);
    req.flash('alertStatus', 'danger');
    res.redirect('/nominal');
  }
};
export const viewCreate = async (req, res) => {
  try {
    res.render('admin/nominal/create', { title: 'Nominal' });
  } catch (error) {
    req.flash('alertMessage', `${error.mesasge}`);
    req.flash('alertStatus', 'danger');
    res.redirect('/nominal');
  }
};

export const actionCreate = async (req, res) => {
  try {
    const { coinName, coinQuantity, price } = req.body;
    // let nominal = await Nominal({ coinName, coinQuantity, price });
    // await nominal.save();
    await Nominal.create({ coinName, coinQuantity, price });

    req.flash('alertMessage', 'Success add nominal');
    req.flash('alertStatus', 'success');

    res.redirect('/nominal');
  } catch (error) {
    req.flash('alertMessage', `${error.mesasge}`);
    req.flash('alertStatus', 'danger');
    res.redirect('/nominal');
  }
};

// export const viewUpdate = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const nominal = await nominal.findOne({ _id: id });

//     res.render('admin/category/update', { title: 'Category', category });
//   } catch (error) {
//     req.flash('alertMessage', `${error.mesasge}`);
//     req.flash('alertStatus', 'danger');
//     res.redirect('/category');
//   }
// };

// export const actionUpdate = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name } = req.body;

//     await Category.findOneAndUpdate(
//       {
//         _id: id,
//       },
//       { name }
//     );

//     req.flash('alertMessage', 'Success update category');
//     req.flash('alertStatus', 'success');

//     res.redirect('/category');
//   } catch (error) {
//     req.flash('alertMessage', `${error.mesasge}`);
//     req.flash('alertStatus', 'danger');
//     res.redirect('/category');
//   }
// };

// export const actionDelete = async (req, res) => {
//   try {
//     const { id } = req.params;

//     await Category.findOneAndRemove({
//       _id: id,
//     });

//     req.flash('alertMessage', 'Success delete category');
//     req.flash('alertStatus', 'success');

//     res.redirect('/category');
//   } catch (error) {
//     req.flash('alertMessage', `${error.mesasge}`);
//     req.flash('alertStatus', 'danger');
//     res.redirect('/category');
//   }
// };
