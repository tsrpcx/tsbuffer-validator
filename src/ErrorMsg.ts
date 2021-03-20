export const ErrorMsg = {
    typeError: (expect: string, actual: string) => `Expected to be \`${expect}\`, actually \`${actual}\`.`,
    invalidScalarType: (value: number | bigint, scalarType: string) => `\`${value}\` is not a valid \`${scalarType}\`.`,
    tupleOverLength: (valueLength: Number, schemaLength: number) => `Value has ${valueLength} elements but schema allows only ${schemaLength}.`,
    invalidEnumValue: (value: string | number) => `\`${value}\` is not a valid enum member.`,
    invalidLiteralValue: (value: any, literal: any) => `Expected to equals \`${stringify(literal)}\`, actually \`${stringify(value)}\``,
    missingRequiredProperty: (propName: string | number) => `Missing required property \`${propName}\`.`,
    excessProperty: (propName: string | number) => `Unexpected property \`${propName}\`.`,
    invalidNumberKey: (key: string) => `\`${key}\` is not a valid key, the key here should be a \`number\`.`,

    // Union
    unionNoLiteralMatch: (value: any, literals: string[]) => `\`${stringify(value)}\` is not matched to \`${literals.join(' | ')}\``,
    unionNoMemberMatch: (memberErrors: { errMsg: string }[]) => `No union member matched, detail:\n${memberErrors.map((v, i) => `  <${i}> ${v.errMsg}`).join('\n')}`,
};

export function stringify(value: any) {
    if (typeof value === 'string') {
        let output = JSON.stringify(value);
        return "'" + output.substr(1, output.length - 2) + "'";
    }
    return JSON.stringify(value);
}