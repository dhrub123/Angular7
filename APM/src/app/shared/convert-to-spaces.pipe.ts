import { PipeTransform, Pipe } from "@angular/core";
@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform{
    transform(inputValue: string, characterToReplace: string): string {
        return inputValue.replace(characterToReplace,' ');
    }
}