export class FuturamaResponse 
    {
        page:  number = 0;
        pages:  number = 0;
        items : Array<FPersonaje>;
        constructor (page: number,pages: number,info: FInfo, items: Array<FPersonaje>) 
            {
                this.items = items;
                this.page = page;
                this.pages = pages;
            }
    } 

export class FInfo
    {
        count:  number = 0;
        pages:  number = 0;
        next:   string = "";
        prev:   string = "";
    }

export class FPersonaje 
    {
        id:         number = 0;
        name:       string = "";
        gender:     string = "";
        status:     string = "";
        species:    string = "";
        createdAt:  string = "";
        image:      string = "";
    }