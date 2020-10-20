/**
 * Add a class into a HTML tag
 */
export const addClass = (node, classList) => {
    for (let className of classList)
        node.classList.add(className);
}

/**
 * Remove a class into a HTML tag
 */
export const removeClass = (node, classList) => {
    for (let className of classList)
        node.classList.remove(className);
}

export const containsClass = (node, className) => {
    return node.classList.contains(className);
}

/**
 * Create a img tag
 */
export const createImageNode = (brand, index) => {
    let node = document.createElement('img'); 
    setAttribute(node, 'src', `./images/${brand.path}`); 
    setAttribute(node, 'data', brand.slug); 
    addClass(node,  ['item', 'card-img', `img-${index}`]);
    return node;
};

/**
 * Create a paragraph tag
 */
export const createParagraphNode = (brand, index) => {
    let node = document.createElement('p');
    node.innerText = brand.name; 
    addClass(node,  ['item', 'card-p', `p-${index}`]);
    setAttribute(node, 'data', brand.slug); 
    return node;
}

export const createHTMLTag = (tag, classList = []) => {
    let node = document.createElement(tag);
    addClass(node, classList);
    return node;
}

export const getAttribute = (node, attr) => {
    return node.getAttribute(attr);
}

export const setAttribute = (node, attr, value) => {
    node.setAttribute(attr, value);
}

/**
 * Add values into array (uniques) random
 */
export const sortArr = (level) => {
    if (level === 0) return [];

    let arr = [];
    while(arr.length < level) {
        const r = Math.floor(Math.random() * level);
        arr = insert(arr, r);
    }
    return arr;
}

/**
 * Insert into arr case el not exists in it
 */
export const insert = (arr, el) => {
    if(arr.indexOf(el) === -1) arr.push(el);
    return arr;
}

/**
 * Check el is into arr
 */
export const inArray = (arr, el) => {
    return arr.indexOf(el) > -1;
}
