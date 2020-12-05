#!/bin/bash

counter=0

for file in ./*
do
  # echo $file
  $counter=$((counter++))
done
echo $counter
