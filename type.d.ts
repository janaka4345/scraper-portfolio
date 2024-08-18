export type JobLIst = {
    project: string
    spider: string
    id: string
    start_time: string
    end_time: string
    log_url: string
    items_url: string
}

export type DataFileListItem = {
    filename: string
    keyword: string
    jobid: string
}

export type DataFile = {
    title: string
    image: string
    price: float
    product_link: string
    stars: float
    bought_in_past_month: int
}

export type walmartDataFile = {
    name: string
    description: string
    image_url: string
    list_price: float
    sell_price: float
    product_url: string
    rating: float
    reviews: int
}

export type DataError = {
    message: string
}
