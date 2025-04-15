export interface ImageDto {
    id: string;
    url: string;
    breed_ids: string[];
    sub_id: string;
    width: number;
    height: number;
    original_filename: string;
    pending: number;
    approved: number;
}
