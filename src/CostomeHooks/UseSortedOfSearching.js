import { useMemo } from "react";

// Хук выполняющий процесс поиска с помошью метода includes().

export const useSortedPosts = (searchValue, libraryItems) => {
    const sortedBySearching = useMemo(() => {
        if (searchValue.length > 0) {
            return [...libraryItems].filter(post => {
                if (post?.place?.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                    return post.place.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
                } else if (post?.category?.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                    return post.category.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
                }
            })
        } else {
            return libraryItems
        }
    }, [searchValue, libraryItems])

    return sortedBySearching
}

export const useSortedPostsCategoty = (searchValue, libraryItems) => {
    const sortedBySearching = useMemo(() => {
        if (searchValue.length > 0) {
            return [...libraryItems].filter(post => {
                if (post?.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                    return post.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
                }
            })
        } else {
            return libraryItems
        }
    }, [searchValue, libraryItems])

    return sortedBySearching
}