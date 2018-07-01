import { Pipe } from "@angular/core";

@Pipe({
    name:'explore',
    pure: false
})
export class ExplorePipe {
    transform(value: any) {
        console.log(value)
    }
}
