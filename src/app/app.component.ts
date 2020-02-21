import { Component ,OnInit,OnChanges} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Nano-Neuron';

  constructor(private httpClient: HttpClient) {}
  ngOnInit()
   {
     const w = Math.random();
      const b = Math.random(); 
       console.log('nano-neuron Ranondam value of W:',w);
        console.log('nano-neuron Ranondam value of B:',b)
             this.celsiusToFahrenheit(console);
              console.log('celsiusToFahrenheit',this.celsiusToFahrenheit(console));
//             console.log('forward propogation',this.forwardPropagation);
    } 
   addepochs(epochs) {
    if (epochs) {
      this.epochss.push(epochs);
       console.log('epochs  value is',epochs);
    }
  }
  NanoNeuron(w, b)
   {
      w = w;
      b = b;
      this.predict = (x) => {
       console.log('predict value:',x);
        return x * w +b;
    }
    }   
  celsiusToFahrenheit(c) 
   {
    const w = 1.8;
     const b = 32;
      const f = c * w + b;
       return f;
    }
     // const [xTrain, yTrain, xTest, yTest] = generateDataSets();
    generatedatasets( Xfield)
   {
    
     const xTrain = [];
      this.XTrain.push(Xfield);
       console.log('value pushed xtrain',Xfield);
        const yTrain = [];
         for (let x = 0; x<Xfield; x += 1) {
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
      const m = xTrain.length;
       const predictions = [];
        let cost = 0;
         for (let i = 0; i < m; i += 1) {
          const prediction = this.nanoNeuron.predict(xTrain[i]);
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

   async trainModel({model,epochs, alpha, xTrain, yTrain})
     {
              const costHistory = [];
               for (let epoch = 0; epoch <epochs; epoch += 1){
                const [predictions, cost] = this.forwardPropagation(model, xTrain, yTrain);
                 costHistory.push(cost);
                  console.log('cost history',cost);
                   const [dW, dB] = this.backwardPropagation(predictions, xTrain, yTrain);
                    this.nanoNeuron.w += alpha * dW;
                     console.log('alpha value is:',alpha)
                      console.log('nanoNeuron dw',this.nanoNeuron.w)
                       this.nanoNeuron.b += alpha * dB;
                        console.log('nanoNeuron dB',this.nanoNeuron.b)
                         console.log('epochs value',epochs)               
       } 
                           console.log('trainmodel',this.trainModel({model, epochs, alpha, xTrain, yTrain}))
                            return costHistory;
       }
       
     
           //test
      public graph =
      {
        data: [{ x: [1, 2, 3,5], y: [2, 5, 3,2,5],  }],
          layout: {autosize: true, title: 'loaded data'},        
      };
      public graphs = 
      {
         data: [{ x: [1, 3, 6], y: [2, 4, 6],  }],
          layout: {autosize: true, title: 'loaded data'},        
      };
}