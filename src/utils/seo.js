export const setPageTitle = (title) => {
  document.title = `${title} | Student Management System`;
};

export const setPageDescription = (description) => {
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = description;
    document.head.appendChild(meta);
  }
};

export const setPageKeywords = (keywords) => {
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) {
    metaKeywords.setAttribute('content', keywords);
  } else {
    const meta = document.createElement('meta');
    meta.name = 'keywords';
    meta.content = keywords;
    document.head.appendChild(meta);
  }
};

export const setPageMeta = (title, description, keywords = '') => {
  setPageTitle(title);
  setPageDescription(description);
  if (keywords) {
    setPageKeywords(keywords);
  }
};
