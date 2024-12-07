export const ConvertTime = (dateString, format = 'dd MMMM yyyy') => {
    const date = new Date(dateString);
    const now = new Date();
  
    const differenceInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    const differenceInMinutes = Math.floor(differenceInSeconds / 60);
    const differenceInHours = Math.floor(differenceInMinutes / 60);
    const differenceInDays = Math.floor(differenceInHours / 24);
    const differenceInMonths = Math.floor(differenceInDays / 30); // Asumsi 1 bulan = 30 hari
    const differenceInYears = Math.floor(differenceInMonths / 12); // Asumsi 1 tahun = 12 bulan
  
    // Menyesuaikan output berdasarkan perbedaan waktu
    if (differenceInSeconds < 60) {
      return { timeAgo: `${differenceInSeconds} second${differenceInSeconds !== 1 ? 's' : ''} ago` };
    } else if (differenceInMinutes < 60) {
      return { timeAgo: `${differenceInMinutes} minute${differenceInMinutes !== 1 ? 's' : ''} ago` };
    } else if (differenceInHours < 24) {
      return { timeAgo: `${differenceInHours} hour${differenceInHours !== 1 ? 's' : ''} ago` };
    } else if (differenceInDays < 7) {
      return { timeAgo: `${differenceInDays} day${differenceInDays !== 1 ? 's' : ''} ago` };
    } else if (differenceInDays < 30) {
      return { timeAgo: `${Math.floor(differenceInDays / 7)} week${Math.floor(differenceInDays / 7) !== 1 ? 's' : ''} ago` };
    } else if (differenceInMonths < 12) {
      return { timeAgo: `${differenceInMonths} month${differenceInMonths !== 1 ? 's' : ''} ago` };
    } else if (differenceInYears < 10) {
      return { timeAgo: `${differenceInYears} year${differenceInYears !== 1 ? 's' : ''} ago` };
    } else {
      // Menampilkan tanggal dalam format yang disesuaikan
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
  
      if (format === 'dd-mm-yyyy') {
        // Format dd-mm-yyyy
        options.month = '2-digit';
        options.day = '2-digit';
        return { timeAgo: date.toLocaleDateString('id-ID', options) };
      }
  
      // Format default dd MMMM yyyy
      return { timeAgo: date.toLocaleDateString('id-ID', options) };
    }
  };
  