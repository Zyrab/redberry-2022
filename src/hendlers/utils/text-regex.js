export const regex = {
  onlyGeorgian: /^[ა-ჰ]{2,}$/,
  min2Symbol: /^[ა-ჰa-zA-Z0-9.!#$%&'*+/:?^_`{|}~ -]{2,}$/,
  textarea: /^[ა-ჰa-zA-Z0-9.!#$%&'*+/:?^_`{|}~, -]+$/,
  phoneNumber: /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/,
  mailText: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry\.ge$/,
};
