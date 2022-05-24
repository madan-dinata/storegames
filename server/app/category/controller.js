export const index = async (req, res) => {
  try {
    res.render('admin/category/view_category', { title: 'Category' });
  } catch (error) {
    console.log(error);
  }
};
export const viewCreate = async (req, res) => {
  try {
    res.render('admin/category/create', { title: 'Category' });
  } catch (error) {
    console.log(error);
  }
};
