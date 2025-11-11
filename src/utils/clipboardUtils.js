// Utility functions for clipboard operations
export const copyToClipboard = async (text, successMessage) => {
  try {
    await navigator.clipboard.writeText(text);
    if (successMessage) {
      alert(successMessage);
    }
    return true;
  } catch (err) {
    console.error('Failed to copy: ', err);
    if (successMessage) {
      alert(`Gagal menyalin: ${err.message}`);
    }
    return false;
  }
};

export const copyAccountNumber = (accountNumber) => {
  copyToClipboard(accountNumber, `Nomor rekening ${accountNumber} telah disalin!`);
};