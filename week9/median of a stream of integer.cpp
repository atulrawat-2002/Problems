/************************ USIING MIN AND MAX HEAP *********************** */
#include<iostream>
#include<bits/stdc++.h>
using namespace std;


class Solution {
  public:
    vector<double> getMedian(vector<int> &arr) {
        // code here
        vector<double> ans;
        
        priority_queue<int> maxHeap;
        
        priority_queue<int, vector<int>, greater<int>> minHeap;
        
        for(int num: arr) {
            if(maxHeap.empty() || maxHeap.top() > num) {
                maxHeap.push(num);
            } else {
                minHeap.push(num);
            }
            
            
            if(maxHeap.size() > minHeap.size() + 1) {
                minHeap.push(maxHeap.top());
                maxHeap.pop();
            } else if(minHeap.size() > maxHeap.size() + 1) {
                maxHeap.push(minHeap.top());
                minHeap.pop();
            }
            
            if(minHeap.size() > maxHeap.size()) ans.push_back(minHeap.top());
            else if(maxHeap.size() > minHeap.size()) ans.push_back(maxHeap.top());
            else {
                ans.push_back( (minHeap.top() + maxHeap.top())/2.0 );
            }
        }
        
        return ans;
        
    }
};
