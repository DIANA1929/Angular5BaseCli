import {Component,OnInit,OnDestroy} from "@angular/core";
import { GitHubModel } from "../model/git-hub-model";
@Component({
    selector: 'app-git-hub-card',
    templateUrl: './git-hub-card.component.html',
    styleUrls: ['./git-hub-card.component.css'] //busca el archivo de estilos
})
export class GitHubCardComponent implements OnInit,OnDestroy {
    gitHubData:GitHubModel; //importado la clase model  
    constructor(){
       this.gitHubData = new GitHubModel();
       this.gitHubData.avatar_url = 'https://d30y9cdsu7xlg0.cloudfront.net/png/16627-200.png';
       this.gitHubData.followers=1;
       this.gitHubData.following=1;
       this.gitHubData.login='DIANA1929';
       this.gitHubData.name='DIANA FELIPE MARTINEZ';
    }
    ngOnInit(){
        
    }
    ngOnDestroy() {
        
    }
    
}