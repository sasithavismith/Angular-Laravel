<?php

namespace App;

use App\Http\Controllers\TaskController;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
protected $fillable = ['title'];
}
