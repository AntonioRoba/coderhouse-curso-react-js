import { DEFAULT_IMAGE_NAME, DEFAULT_IMAGE_PATH } from './const';

export const photo_src = (photo, product_id) =>
  photo === DEFAULT_IMAGE_NAME
    ? `${DEFAULT_IMAGE_PATH}${photo}`
    : `${DEFAULT_IMAGE_PATH}${product_id}/${photo}`;
