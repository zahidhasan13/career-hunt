const loadedJobCategory = async () => {
    const loadedCategory = await fetch('jobCategory.json')
    const category = await loadedCategory.json();
    return category;
}

export default loadedJobCategory;