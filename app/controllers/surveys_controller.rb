class SurveysController < ApplicationController

  def index
  end

  def graph
  end

  def report
    surveys = Survey.all

    data = {
      :q1 => [],
      :q2 => [],
      :q3 => []
    }

    q1_20under_count = 0
    q1_21to30_count = 0
    q1_31to40_count = 0
    q1_41above_count = 0
    surveys.each do |survey|
      if survey.q1 == '20under'
        q1_20under_count += 1
      elsif survey.q1 == '21to30'
        q1_21to30_count += 1
      elsif survey.q1 == '31to40'
        q1_31to40_count += 1
      elsif survey.q1 == '41above'
        q1_41above_count += 1)
      end
      data[:q3][0] = q1_20under_count
      data[:q3][1] = q1_21to30_count
      data[:q3][2] = q1_31to40_count
      data[:q3][3] = q3_yes_count

    end


    # Question 3
    q3_yes_count = 0
    q3_no_count = 0
    surveys.each do |survey|
      if survey.q3 == 'yes'
        q3_yes_count += 1
      elsif survey.q3 == 'no'
        q3_no_count += 1
      end
    end
    data[:q3][0] = q3_yes_count
    data[:q3][1] = q3_no_count

    render json: data

  end

  def create
    survey = Survey.new
    survey.q1 = params[:question_1]
    survey.q2 = params[:question_2]
    survey.q3 = params[:question_3]
    if survey.save
      render :thank_you
    else
      render :index
    end
  end






end
