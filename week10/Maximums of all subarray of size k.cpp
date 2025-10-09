#include <iostream>>
#include <bits/stdc++.h>

using namespace std;

vector<int> maxOfSubarrays(vector<int> & arr, int k) {
        // code here
        int n = arr.size();

        vector<int> ans;

        priority_queue<pair<int, int>> heap;

        for (int i = 0; i < k; i++)
        {
            heap.push({arr[i], i});
        }

        ans.push_back(heap.top().first);

        for (int i = k; i < n; i++)
        {
            heap.push({arr[i], i});

            while (heap.top().second <= i - k)
                heap.pop();

            ans.push_back(heap.top().first);
        }

        return ans;
    }

int main()
{
    
}


/*

USING DOUBLE ENDED QUEUE


var maxSlidingWindow = function(nums, k) {
    let n = nums.length;
    let dq = [];
    let ans = [];

    for(let i = 0; i < k; i++) {
        while( dq.length && nums[i] >= nums[dq[dq.length - 1]] ) 
            dq.pop();

        dq.push(i);
    }

    ans.push( nums[dq[0]] );

    for(let i = k; i < n; i++) {
        while(dq.length && dq[0] <= i - k) dq.shift();

        while(dq.length && nums[i] >= nums[dq[dq.length - 1]]) dq.pop();

        dq.push(i);

        ans.push(nums[dq[0]]);

    }

    return ans;

};

*/