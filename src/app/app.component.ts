import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormBuilder, FormGroup, FormArray } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Nano-Neuron';
  epochss = [];
  epoch=[];
  predict;
  alpha = 0.0005;
  datasets=[];
  Xfields=[];
  xfield ='xtrain';
  yfield='ytrain'
  xTrain=[];
  NanoNeurons={}
  trained_model = {};
  loadingdata={};
  tempInCelsius = 70;
 // demo_1_div_display: boolean;
 //demo_1_graph = { data: [], layout: {} };
 // demo_1_loadingdata = false;
  public data: any;
  public layout: any;
 // nanoNeuron = new NanoNeuron(w, b);
 constructor(private httpClient: HttpClient) {}
    ngOnInit()
    {
      const w = Math.random();
       const b = Math.random(); 
        console.log('nano-neuron Ranondam value of W:',w);
         console.log('nano-neuron Ranondam value of B:',b)
          this.generatedatasets(console);
           console.log('generateddatasets', this.generatedatasets(console))
            this.NanoNeuron(w,b);
             console.log('predict', this.NanoNeuron(w,b));
      this.celsiusToFahrenheit(console);
      console.log('celsiusToFahrenheit',this.celsiusToFahrenheit(console));
      console.log('forward propogation',this.forwardPropagation)
    } 
    /*
    generateData(newValue)
     { 
       this.datasets.push(newValue);
       console.log('value pushed:',this.datasets)
     }
   */

    NanoNeuron(w, b)
     {
     this.w = w;
     this.b = b;
     this.predict = (x) => {
      return x * w + b;
    }
    }
    celsiusToFahrenheit(c) 
    {
       c=28;
       const w = 1.8;
       const b = 32;
       const f = c * w + b;
        return f;
        console.log('celsius',f);
    }

     // const [xTrain, yTrain, xTest, yTest] = generateDataSets();

  generatedatasets( Xfield)
      {
       const xTrain = [];
       this.xTrain.push(Xfield);
        console.log('value pushed xtrain',this.xTrain);
         const yTrain = [];
           for (let x = 0; x < xTrain[x]; x += 1) {
             const y =this. celsiusToFahrenheit(x);
              xTrain.push(x);
               yTrain.push(y);
               console.log('yTrain value is:',yTrain)
                console.log('value of xtrain field',xTrain[x])
       }
                 const xTest = [];
                  console.log('xTest value is:',xTest)
                   const yTest = [];
                    console.log('yTest value is:',yTest)
                     for (let x = 0.5; x < 5; x += 1)
                      {
                       const y = this.celsiusToFahrenheit(x);
                         xTest.push(x);
                          yTest.push(y);
                     }
                      return [xTrain, yTrain, xTest, yTest];
       }


     forwardPropagation(model, xTrain, yTrain)
      {
        let predictionCost;
         let nanoNeuron
          const m = xTrain.length;
           const predictions = [];
            let cost = 0;
             for (let i = 0; i < m; i += 1) {
               const prediction = nanoNeuron.predict(xTrain[i]);
                 cost += predictionCost(yTrain[i], prediction);
         console.log('cost1',cost)
                 predictions.push(prediction);
                   console.log('prediction forward' ,prediction    )
        
      }
        cost /= m;
        console.log('cost    valueeee is :',cost)
        return [predictions, cost];
      }
       backwardPropagation(predictions, xTrain, yTrain) 
       {
         const m = xTrain.length;
          let dW = 0;
           let dB = 0;
            for (let i = 0; i < m; i += 1){
             dW += (yTrain[i] - predictions[i]) * xTrain[i];
              console.log(' Dw7777777777777', dW += (yTrain[i] - predictions[i]) * xTrain[i])
               dB += yTrain[i] - predictions[i];
                 console.log('dB***********', dB += yTrain[i] - predictions[i])
       }
                  dW /= m;
                  console.log('average dw', dW  )
                  dB /= m;
                  console.log('AVERAGE DB',  dB )
                  return [dW, dB];
       }


        async trainModel({model, epochs, alpha, xTrain, yTrain})
       {
         let nanoNeuron;
         this.epochss.push(epochs);
         console.log('epochs value',this.epochss)
          const costHistory = [];
           for (let epoch = 0; epoch < epochs; epoch += 1){
            const [predictions, cost] = this.forwardPropagation(model, xTrain, yTrain);
             costHistory.push(cost);
              const [dW, dB] = this.backwardPropagation(predictions, xTrain, yTrain);
               nanoNeuron.w += alpha * dW;
               console.log('alpha value is:',alpha)
                console.log('nanoNeuron dw',nanoNeuron.w)
                 nanoNeuron.b += alpha * dB;
                  console.log('nanoNeuron dB',nanoNeuron.b)
       }
       
       console.log('trainmodel',this.trainModel({model, epochs, alpha, xTrain, yTrain}))
        return costHistory;
       }
        w=Math.random()
        b = Math.random();
   
       fetchdata()
       {
       }
    //test
       public graph = {
        data: [{ x: [1, 2, 3], y: [2, 5, 3],  }],
        layout: {autosize: true, title: 'loaded data'},        
    };
    //test
    public graphs = {
      data: [{ x: [1, 3, 6], y: [2, 4, 6],  }],
      layout: {autosize: true, title: 'loaded data'},        
  };
}

 /*  getdata(){
        var arr = [];
        for (let i=0; i<10; i++) {
          arr.push(Array(10).fill(0).map(()=>Math.random()));
        }
        return arr

      }
      */