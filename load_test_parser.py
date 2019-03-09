#!/bin/python3

if __name__ == "__main__":
  with open('output_2.txt', 'r') as f:
    lines = f.readlines()
    relevant = [line.strip().split('Current latency')[1] for line in lines if line.startswith('Current latency')]

    relevant = list(map(float, map(lambda x: x.strip(), relevant)))
  
    max_latency = max(relevant)
    min_latency = min(relevant)

    avg_latency = sum(relevant) / len(relevant)

    print("Max latency (ms):", max_latency)
    print("Min latency (ms):", min_latency)
    print("Avg latency (ms):", avg_latency) 
