
// Load tất cả ảnh từ folder images cùng lúc
// Lưu ý: Đường dẫn '../images/' là tương đối so với file utils này.
const localImages = (import.meta as any).glob('../images/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  query: '?url',
  import: 'default'
});

/**
 * Hàm lấy đường dẫn ảnh từ folder images/ dựa trên tên file.
 * @param fileName Tên file (ví dụ: 'david.jpg')
 * @param fallbackUrl Link ảnh online dự phòng nếu không tìm thấy file local
 * @returns Đường dẫn ảnh (local hoặc fallback)
 */
export const getLocalImage = (fileName: string | undefined, fallbackUrl: string = ""): string => {
  if (!fileName) return fallbackUrl;
  const path = `../images/${fileName}`;
  const localSrc = localImages[path] as string;
  return localSrc || fallbackUrl;
};
