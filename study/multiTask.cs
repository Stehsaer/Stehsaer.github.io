using System;
using System.Drawing;
using System.Math;
using System.Threading;

int threadCount = 16;
int taskCount = 512;

Thread[] threadSet = new Thread[1];
int[] idSet = new int[1]; // 0 for unused; 1 for proceeding; 2 for finished
double[] progressSet = new double[1];

void Proceed(){

    int id = -1;
    int taskId = -1;

    for(int i = 0; i < idSet.Length; i++) if(idSet[i] == 0) 
    {
        id = i;
        idSet[i] = 1;
    }
    
    if(id == -1) return;

    while(true){

        // pick a task to do
        taskId = -1;
        
        for(int i = 0; i < taskCount; i++) if(progressSet[i] == -1){
            progressSet[i] = 0;
            taskId = i;
            break;
        }

        if(taskId == -1) break;

        Calc(taskId);
    }

    idSet[id] = 2;
}

void Calc(int num);

void Init(){
    threadSet = new Thread[threadCount];
    progressSet = new double[taskCount];
    idSet = new int[threadCount];

    for(int i = 0; i < threadCount; i++) 
    {
        threadSet[i] =  new Thread(new ThreadStart(Proceed));
        threadSet[i].IsBackground = false;
    }
    for(int i = 0; i < taskCount; i++) progressSet[i] = -1;
    for(int i = 0; i < threadCount; i++) idSet[i] = 0;
}

void StartTask(){
    for(int i = 0; i < threadCount; i++)
    {
        threadSet[i].Start();
        Thread.Sleep(100);
    }
}

int main(string[] args){
    Init();
}