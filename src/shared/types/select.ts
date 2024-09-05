export interface OptionItem<T extends string> {
    value: T;
    content: string;
    disabled?: boolean;
}
