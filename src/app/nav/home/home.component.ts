import { Component} from '@angular/core';
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";




@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})

export class HomeComponent {
clicked: boolean = false
like: boolean = false
like1:boolean = false
clicarTopico:boolean = false
    booleanrespostas:boolean = false
    booleanrespostas1:boolean = false

  handleClick(): void {
        this.clicked = !this.clicked;
        if (this.clicked){
          const element: HTMLElement = document.getElementById('favBtn') as HTMLElement
          element.innerHTML = `<span class="pi pi-star-fill"></span>`;


        }
        if (!this.clicked) {
          const element: HTMLElement = document.getElementById('favBtn') as HTMLElement
          element.innerHTML = `<span class="pi pi-star"></span>`;
        }
}

 likeClick(): void{
      this.like = !this.like;
      if (this.like){
          const like :HTMLElement = document.getElementById('icon') as HTMLElement
          like.innerHTML = ` <span class="pi pi-heart-fill"></span>`;
          let count:HTMLElement = document.getElementById('contador') as HTMLElement
         let x:number = + count.innerText
         x++
          count.innerHTML = String(x)
      }

      if (!this.like){
          const like :HTMLElement = document.getElementById('icon') as HTMLElement
          like.innerHTML = ` <span class="pi pi-heart"></span>`
          let count:HTMLElement = document.getElementById('contador') as HTMLElement
          let x:number = + count.innerText
          x--
          count.innerHTML = String(x)
      }
 }

 likeClick1():void{
     this.like1 = !this.like1
          if (this.like1){
              const like :HTMLElement = document.getElementById('icon1') as HTMLElement
              like.innerHTML = ` <span class="pi pi-heart-fill"></span>`

              let count:HTMLElement = document.getElementById('contador1') as HTMLElement
              let x:number = + count.innerText
              x++
              count.innerHTML = String(x)
          }
          if (!this.like1) {
              const like :HTMLElement = document.getElementById('icon1') as HTMLElement
              like.innerHTML = ` <span class="pi pi-heart"></span>`

              let count:HTMLElement = document.getElementById('contador1') as HTMLElement
              let x:number = + count.innerText
              x--
              count.innerHTML = String(x)
          }

 }


    leiaMais() {
        const pontos:HTMLElement = document.getElementById('pontos') as HTMLElement
        const texto:HTMLElement = document.getElementById('mais') as HTMLElement
        const button: HTMLElement = document.getElementById('btnVerMais') as HTMLElement
        if (pontos.style.display ==='none'){
            pontos.style.display = 'inline'
            texto.style.display = 'none'
            button.innerHTML = "ver mais"
        }
        else {
            pontos.style.display = "none"
            texto.style.display = "inline"
            button.innerHTML = "ver menos"
        }

    }

    criarTopico() {
        const topico:HTMLElement = document.getElementById("topico") as HTMLElement
        const criarTopico:HTMLElement = document.getElementById("criar-Topico") as HTMLElement


        this.clicarTopico = !this.clicarTopico

        if (this.clicarTopico){
            topico.style.display = 'none'
            criarTopico.style.display = 'inline'
        }

    }

    enviarTopico() {
        const topicoEnviado:HTMLElement = document.getElementById("topico-enviado1") as HTMLElement
        const criarTopico:HTMLElement = document.getElementById("criar-Topico") as HTMLElement
        let clicked: boolean = false
        if (!clicked) {

            criarTopico.style.display = "none";
            topicoEnviado.style.display = "inline";

        }


    }

    novoTopico() {
        const topicoEnviado:HTMLElement = document.getElementById("topico-enviado1") as HTMLElement
        const criarTopico:HTMLElement = document.getElementById("criar-Topico") as HTMLElement
        let clicked = false;
        if (!clicked) {

            criarTopico.style.display = "inline";
            topicoEnviado.style.display = "none";

        }

    }

    respostas() {
        const resposta:HTMLElement = document.getElementById("respostas")as HTMLElement
        this.booleanrespostas = !this.booleanrespostas
        if (this.booleanrespostas) {
            resposta.style.display = "inline";
        }
        if (!this.booleanrespostas) {

            resposta.style.display = "none";

        }
    }

    respostas1() {
        const resposta:HTMLElement = document.getElementById("respostas1")as HTMLElement
        this.booleanrespostas1 = !this.booleanrespostas1
        if (this.booleanrespostas1) {
            resposta.style.display = "inline";
        }

        if (!this.booleanrespostas1) {

            resposta.style.display = "none";

        }
    }


}






