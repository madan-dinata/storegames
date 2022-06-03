import Category from './model.js';

export const index = async (req, res) => {
  try {
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');

    const alert = { message: alertMessage, status: alertStatus };
    const category = await Category.find();

    console.log(alert);

    res.render('admin/category/view_category', { title: 'Category', category, alert });
  } catch (error) {
    req.flash('alertMessage', `${error.mesasge}`);
    req.flash('alertStatus', 'danger');
    res.redirect('/category');
  }
};
export const viewCreate = async (req, res) => {
  try {
    res.render('admin/category/create', { title: 'Category' });
  } catch (error) {
    req.flash('alertMessage', `${error.mesasge}`);
    req.flash('alertStatus', 'danger');
    res.redirect('/category');
  }
};

export const actionCreate = async (req, res) => {
  try {
    const { name } = req.body;
    // let category = await Category({ name });
    // await category.save();
    await Category.create({ name });

    req.flash('alertMessage', 'Success add category');
    req.flash('alertStatus', 'success');

    res.redirect('/category');
  } catch (error) {
    req.flash('alertMessage', `${error.mesasge}`);
    req.flash('alertStatus', 'danger');
    res.redirect('/category');
  }
};

export const viewUpdate = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findOne({ _id: id });

    res.render('admin/category/update', { title: 'Category', category });
  } catch (error) {
    req.flash('alertMessage', `${error.mesasge}`);
    req.flash('alertStatus', 'danger');
    res.redirect('/category');
  }
};

export const actionUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    await Category.findOneAndUpdate(
      {
        _id: id,
      },
      { name }
    );

    req.flash('alertMessage', 'Success update category');
    req.flash('alertStatus', 'success');

    res.redirect('/category');
  } catch (error) {
    req.flash('alertMessage', `${error.mesasge}`);
    req.flash('alertStatus', 'danger');
    res.redirect('/category');
  }
};

export const actionDelete = async (req, res) => {
  try {
    const { id } = req.params;

    await Category.findOneAndRemove({
      _id: id,
    });

    req.flash('alertMessage', 'Success delete category');
    req.flash('alertStatus', 'success');

    res.redirect('/category');
  } catch (error) {
    req.flash('alertMessage', `${error.mesasge}`);
    req.flash('alertStatus', 'danger');
    res.redirect('/category');
  }
};
