

export function uniqueCollaction(arr) {
    let arrCategory = arr.map( item => item.category)
    return Array.from(new Set(arrCategory));
  }