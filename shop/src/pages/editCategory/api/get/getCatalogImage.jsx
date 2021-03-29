import getRequest from '../../../../common/api/get/getRequest';

const catalogImage = '/category';

async function getCatalogImage(id, updateData) {
  try {
    const response = await getRequest(catalogImage);
    const result = response.data;
    const photo = result.filter((category) => category.id === id).map((item) => item.image);
    updateData(photo);
    return result;
  } catch (error) {
    return null;
  }
}

export default getCatalogImage;
