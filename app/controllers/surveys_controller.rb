class SurveysController < ApplicationController

  def index
  end 

  def report
    surveys = Survey.all

    data = {
      :q3 => []
    }

    q3_yes_count = 0
    q3_no_count = 0
    surveys.each do |survey|
      if survey.q3 == 'YES'
        q3_yes_count += 1
      elsif survey.q3 == 'NO'
        q3_no_count += 1
      end
    end
    data[:q3][0] = q3_yes_count
    data[:q3][1] = q3_no_count

    render json: data

  end

  def create
  end

  def update
  end
end
