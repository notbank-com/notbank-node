export interface EnumValue {
    Name: string;
    Description: string;
    Number: number;
}
export interface EnumsResponse {
    Class: string;
    Property: string;
    Enums: EnumValue[];
}
